import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STARTLAP = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.startlap;fillColor=#B9E6F0;gradientColor=#3062A2',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Startlap(props: NodeProps) {
  return (
    <Shape {...STARTLAP} {...props} _style={extendStyle(STARTLAP, props)} />
  )
}
