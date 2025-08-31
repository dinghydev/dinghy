import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_NETAPP_FILES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_NetApp_files.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 42,
}

export function AzureNetappFiles(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_NETAPP_FILES}
      {...props}
      _style={extendStyle(AZURE_NETAPP_FILES, props)}
    />
  )
}
