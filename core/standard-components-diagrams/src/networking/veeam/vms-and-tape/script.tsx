import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SCRIPT = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.script;',
  },
  _width: 44.8,
  _height: 44.8,
}

export function Script(props: DiagramNodeProps) {
  return <Shape {...SCRIPT} {...props} _style={extendStyle(SCRIPT, props)} />
}
