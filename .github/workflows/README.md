# Workflows

1. [ci.yml](./ci.yml)

   Este flujo de trabajo se ejecuta en solicitudes de extracción y se supone que ejecuta pruebas en la rama de destino. Dado que los espacios de trabajo están aislados entre sí, el flujo de trabajo realizará una comprobación de diferencias para detectar los espacios de trabajo con cambios con el fin de acelerar las verificaciones.
   Una vez que todas las comprobaciones tengan éxito, la solicitud de extracción se puede combinar. 

2. [release_workspace.yml](./release_workspace.yml)

   Este flujo de trabajo toma el nombre de un espacio de trabajo como entrada y es responsable de crear una PR de paquetes de versión en caso de que haya cambios, o realizar una versión de los paquetes en el espacio de trabajo especificado en caso de que algunos de ellos no se hayan publicado.

   Consulte la documentación [Conjuntos de cambios] (https://github.com/changesets/changesets) para obtener más información sobre cómo funcionan los conjuntos de cambios.

3. [release-all.yml](./release-all.yml)

   Este flujo de trabajo es responsable de liberar todos los espacios de trabajo invocando [release_workspace.yml](./release_workspace.yml) en paralelo en todos los espacios de trabajo. El flujo de trabajo se ejecuta en la rama principal, cada vez que se introduce algo nuevo en la rama. El flujo de trabajo se basa en [release_workspace.yml](./release_workspace.yml) para ser lo suficientemente inteligente como para omitir la construcción del espacio de trabajo seleccionado, siempre que no sea necesario publicar.
