import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FORM = {
  _style: {
    entity: 'fillColor=none;strokeColor=none;align=left;fontSize=14;',
  },
  _original_width: 0,
  _original_height: 500,
}

export function Form(props: DiagramNodeProps) {
  return <Shape {...FORM} {...props} _style={extendStyle(FORM, props)} />
}
