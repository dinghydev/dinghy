import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DEALSPLUS = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.dealsplus;fillColor=#B569B5;gradientColor=#7A467A',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Dealsplus(props: DiagramNodeProps) {
  return (
    <Shape {...DEALSPLUS} {...props} _style={extendStyle(DEALSPLUS, props)} />
  )
}
