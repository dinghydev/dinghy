import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WORXHOME = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.worxhome;fillColor=#DB9EFF;gradientColor=#712FA2;gradientDirection=south;',
  },
  _original_width: 38,
  _original_height: 38,
}

export function Worxhome(props: DiagramNodeProps) {
  return (
    <Shape {...WORXHOME} {...props} _style={extendStyle(WORXHOME, props)} />
  )
}
