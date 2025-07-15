import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NETAPP_FILES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Azure_NetApp_Files.svg;',
  _width: 65,
  _height: 52,
}

export function NetappFiles(props: DiagramNodeProps) {
  return <Shape {...NETAPP_FILES} {...props} />
}
