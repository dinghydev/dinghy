import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GITHUB = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.github',
  },
  _original_width: 75,
  _original_height: 75,
}

export function Github(props: DiagramNodeProps) {
  return <Shape {...GITHUB} {...props} _style={extendStyle(GITHUB, props)} />
}
