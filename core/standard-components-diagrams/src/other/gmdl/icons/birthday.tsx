import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BIRTHDAY = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.birthday;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _original_width: 24,
  _original_height: 22,
}

export function Birthday(props: DiagramNodeProps) {
  return (
    <Shape {...BIRTHDAY} {...props} _style={extendStyle(BIRTHDAY, props)} />
  )
}
