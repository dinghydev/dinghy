import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GOVERNMENT = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.government;',
  _width: 119,
  _height: 52,
}

export function Government(props: DiagramNodeProps) {
  return (
    <Shape {...GOVERNMENT} {...props} _style={extendStyle(GOVERNMENT, props)} />
  )
}
