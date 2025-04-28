1. Diferencias entre una arquitectura REST y una arquitectura de microservicios
REST es un estilo arquitectónico para construir APIs, centrado en cómo se comunican los clientes y servidores, utilizando HTTP y operaciones estándar como GET, POST, PUT y DELETE sobre recursos.

Microservicios es una forma de diseñar toda una aplicación dividiéndola en servicios independientes, donde cada servicio puede tener su propia API REST (u otro tipo de comunicación) y su propia base de datos.

En resumen:
REST define cómo comunicar recursos.
Microservicios define cómo estructurar una aplicación en muchos pequeños servicios autónomos, que suelen comunicarse vía REST o mensajería.

2. Desafíos al dividir nuestra app REST actual en microservicios
Separar la lógica: Actualmente, toda la lógica de productos está centralizada. Habría que dividirla en servicios independientes (por ejemplo, un microservicio de productos, otro de usuarios, otro de autenticación, etc.).

Comunicación entre servicios: Tendríamos que implementar mecanismos de comunicación, por ejemplo APIs REST entre microservicios o sistemas de mensajería como RabbitMQ o Kafka.

Base de datos: Cada microservicio debería manejar su propia base de datos o su propio esquema, rompiendo el modelo de "una sola base de datos compartida".

Infraestructura: Necesitaríamos orquestadores (como Docker y Kubernetes) para manejar múltiples servicios corriendo al mismo tiempo.

Mayor complejidad: El despliegue, monitoreo, testing y manejo de errores se vuelven mucho más complejos en comparación con una app monolítica.

3. Ventajas teóricas de los microservicios frente a una API REST monolítica
Escalabilidad: Cada microservicio puede escalarse de forma independiente según su demanda específica (por ejemplo, escalar solo el servicio de productos si tiene mucho tráfico).

Resiliencia: Si un microservicio falla, no necesariamente afecta a toda la aplicación.

Flexibilidad tecnológica: Cada microservicio podría programarse en un lenguaje diferente o usar una base de datos diferente, si eso fuera más eficiente.

Desarrollo paralelo: Equipos diferentes pueden trabajar de manera independiente en diferentes servicios sin bloquearse entre sí.

Actualizaciones más rápidas: Podemos actualizar o reemplazar un microservicio sin tener que redeplegar toda la aplicación.