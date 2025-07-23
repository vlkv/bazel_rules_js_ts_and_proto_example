import sys
print(f'PYTHONPATH={sys.path}')

from main import say_hello_to
from example.thing.thing_pb2 import Thing
from example.other.other_api_pb2 import OtherRequest, OtherResponse
from example.other.other_api_pb2_grpc import OtherApiStub

def test_say_hello_to():
    assert say_hello_to('Foo') == 'Hello, Foo!'
    req = OtherRequest(name='foo')
    assert req.name == 'foo'
    th = Thing()
    assert th
