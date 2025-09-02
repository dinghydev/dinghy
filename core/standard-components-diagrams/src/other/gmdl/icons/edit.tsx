import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EDIT = {
  _style: {
    entity:
      'html=1;dashed=0;aspect=fixed;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.edit;strokeColor=none;fillColor=#737373;shadow=0;sketch=0;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function Edit(props: DiagramNodeProps) {
  return <Shape {...EDIT} {...props} _style={extendStyle(EDIT, props)} />
}
