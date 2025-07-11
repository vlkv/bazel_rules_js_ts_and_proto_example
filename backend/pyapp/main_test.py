from backend.pyapp.main import say_hello_to


def test_say_hello_to():
    assert say_hello_to('Foo') == 'Hello, Foo!'
