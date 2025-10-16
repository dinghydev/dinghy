import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETAPP_FILES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Azure_NetApp_Files.svg;strokeColor=none;',
  },
  _original_width: 65,
  _original_height: 52,
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
