import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUDIOBOO = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.audioboo;fillColor=#B9217E',
  },
  _original_width: 54,
  _original_height: 79.4,
}

export function Audioboo(props: DiagramNodeProps) {
  return (
    <Shape {...AUDIOBOO} {...props} _style={extendStyle(AUDIOBOO, props)} />
  )
}
