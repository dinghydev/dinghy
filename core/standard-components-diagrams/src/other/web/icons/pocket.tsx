import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const POCKET = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.pocket;fillColor=#FF4460;gradientColor=#B73143',
  _width: 102.4,
  _height: 102.4,
}

export function Pocket(props: DiagramNodeProps) {
  return <Shape {...POCKET} {...props} />
}
