import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FORM = {
  _style: {
    entity: 'fillColor=none;strokeColor=none;align=left;fontSize=14;',
  },
  _width: 0,
  _height: 500,
}

export function Form(props: NodeProps) {
  return <Shape {...FORM} {...props} _style={extendStyle(FORM, props)} />
}
