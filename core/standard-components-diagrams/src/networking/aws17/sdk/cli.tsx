import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLI = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cli;fillColor=#444444;gradientColor=none;',
  },
  _original_width: 72,
  _original_height: 82.5,
}

export function Cli(props: DiagramNodeProps) {
  return <Shape {...CLI} {...props} _style={extendStyle(CLI, props)} />
}
