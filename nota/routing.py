from channels.routing import ProtocolTypeRouter, URLRouter
import notes.routing
from channels.auth import AuthMiddlewareStack

application = ProtocolTypeRouter({
    "websocket": AuthMiddlewareStack(URLRouter(
        notes.routing.websocket_urlpatterns
    ))
})