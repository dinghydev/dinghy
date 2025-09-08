import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FLASH = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.flash',
  },
  _original_width: 60,
  _original_height: 100,
}

export function Flash(props: DiagramNodeProps) {
  return <Shape {...FLASH} {...props} _style={extendStyle(FLASH, props)} />
}
