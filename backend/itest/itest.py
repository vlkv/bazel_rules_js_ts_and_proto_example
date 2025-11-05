import redis
import docker
from testcontainers.core.container import DockerContainer
from testcontainers.core.waiting_utils import wait_for_logs
from runfiles import Runfiles

IMAGE_NAME = "monorepo.local/itest_redis:latest"

rf = Runfiles.Create()
TAR_PATH = rf.Rlocation('monorepo/backend/itest/redis_load/tarball.tar')

def _load_latest_tarball():
    client = docker.from_env()
    with open(TAR_PATH, "rb") as f:
        client.images.load(f.read())

def test_redis_ping():
    _load_latest_tarball()

    with DockerContainer(IMAGE_NAME).with_exposed_ports(6379) as container:
        _ = wait_for_logs(container, "Ready to accept connections", timeout=30)
        host = container.get_container_host_ip()
        port = container.get_exposed_port(6379)

        r = redis.Redis(host=host, port=port)
        assert r.ping()

        r.set("my_key", 40)
        r.incrby("my_key", amount=2)
        assert int(r.get("my_key")) == 42
