import requests


def say_hello_to(name: str) -> str:
    return f'Hello, {name}!'


if __name__ == '__main__':
    print(say_hello_to('Bazel'))
    print(f'requests.__version__={requests.__version__}')
