import requests
# from example.other.other_api_pb2 import OtherRequest, OtherResponse
# from example.other.other_api_pb2_grpc import OtherApiStub


def say_hello_to(name: str) -> str:
    return f'Hello, {name}!'


if __name__ == '__main__':
    print(say_hello_to('Bazel'))
    print(f'requests.__version__={requests.__version__}')
    # req = OtherRequest(name='foo')
    # print(f'req.name={req.name}')
    # _ = OtherApiStub
