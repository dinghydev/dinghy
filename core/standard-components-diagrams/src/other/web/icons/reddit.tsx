import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REDDIT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.reddit;fillColor=#F3F8FC;gradientColor=#B4D2F0',
  _width: 102.4,
  _height: 102.4,
}

export function Reddit(props: DiagramNodeProps) {
  return <Shape {...REDDIT} {...props} _style={extendStyle(REDDIT, props)} />
}
