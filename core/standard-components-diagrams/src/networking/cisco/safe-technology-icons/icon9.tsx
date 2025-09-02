import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ICON9 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.technology_icons.icon9;',
  },
  _original_width: 39,
  _original_height: 50,
}

export function Icon9(props: DiagramNodeProps) {
  return <Shape {...ICON9} {...props} _style={extendStyle(ICON9, props)} />
}
