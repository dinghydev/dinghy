import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REDDIT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.reddit;fillColor=#F3F8FC;gradientColor=#B4D2F0',
  _width: 88,
  _height: 73.60000000000001,
}

export function Reddit(props: DiagramNodeProps) {
  return <Shape {...REDDIT} {...props} />
}
