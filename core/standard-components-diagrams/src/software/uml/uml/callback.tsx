import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CALLBACK = {
  _style: {
    entity:
      'html=1;verticalAlign=bottom;endArrow=block;curved=0;rounded=0;entryX=1;entryY=0;entryDx=0;entryDy=5;',
  },
  _original_width: 1,
  _original_height: 80,
}

export function Callback(props: DiagramNodeProps) {
  return (
    <Shape {...CALLBACK} {...props} _style={extendStyle(CALLBACK, props)} />
  )
}
