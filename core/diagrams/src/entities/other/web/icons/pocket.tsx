import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const POCKET = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.pocket;fillColor=#FF4460;gradientColor=#B73143',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Pocket(props: DiagramNodeProps) {
  return <Shape {...POCKET} {...props} _style={extendStyle(POCKET, props)} />
}
