import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASK = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.ask;fillColor=#F33543;gradientColor=#B50E11',
  _width: 102.4,
  _height: 102.4,
}

export function Ask(props: DiagramNodeProps) {
  return <Shape {...ASK} {...props} _style={extendStyle(ASK, props)} />
}
