import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETAPP_FILES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Azure_NetApp_Files.svg;strokeColor=none;',
  _width: 65,
  _height: 52,
}

export function NetappFiles(props: DiagramNodeProps) {
  return (
    <Shape
      {...NETAPP_FILES}
      {...props}
      _style={extendStyle(NETAPP_FILES, props)}
    />
  )
}
