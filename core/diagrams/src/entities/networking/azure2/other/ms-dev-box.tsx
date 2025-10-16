import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MS_DEV_BOX = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/MS_Dev_Box.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function MsDevBox(props: DiagramNodeProps) {
  return (
    <Shape {...MS_DEV_BOX} {...props} _style={extendStyle(MS_DEV_BOX, props)} />
  )
}
