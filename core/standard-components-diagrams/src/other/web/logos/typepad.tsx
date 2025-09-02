import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TYPEPAD = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.typepad;fillColor=#ADB560;strokeColor=none',
  },
  _original_width: 64.8,
  _original_height: 38.400000000000006,
}

export function Typepad(props: DiagramNodeProps) {
  return <Shape {...TYPEPAD} {...props} _style={extendStyle(TYPEPAD, props)} />
}
