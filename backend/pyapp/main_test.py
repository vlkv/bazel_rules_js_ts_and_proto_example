import sys

from main import say_hello_to
from example.thing.thing_pb2 import Thing
from example.other.other_api_pb2 import DoOtherStuffRequest #, DoOtherStuffResponse
# from example.other.other_api_pb2_grpc import OtherApiServiceStub

print(f'PYTHONPATH={sys.path}')

def test_say_hello_to():
    assert say_hello_to('Foo') == 'Hello, Foo!'
    req = DoOtherStuffRequest(name='foo')
    assert req.name == 'foo'
    th = Thing()
    assert th
