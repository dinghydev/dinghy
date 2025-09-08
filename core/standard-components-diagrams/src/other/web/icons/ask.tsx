import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASK = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.ask;fillColor=#F33543;gradientColor=#B50E11',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Ask(props: DiagramNodeProps) {
  return <Shape {...ASK} {...props} _style={extendStyle(ASK, props)} />
}
