import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FILESHARE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Azure_Fileshare.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function Fileshare(props: DiagramNodeProps) {
  return (
    <Shape {...FILESHARE} {...props} _style={extendStyle(FILESHARE, props)} />
  )
}
