import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REDDIT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.reddit;fillColor=#F3F8FC;gradientColor=#B4D2F0',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Reddit(props: DiagramNodeProps) {
  return <Shape {...REDDIT} {...props} _style={extendStyle(REDDIT, props)} />
}
