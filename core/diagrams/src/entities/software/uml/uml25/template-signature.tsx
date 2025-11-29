import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEMPLATE_SIGNATURE = {
  _style: {
    entity: 'shape=partialRectangle;html=1;top=1;align=left;dashed=1;',
  },
  _width: 200,
  _height: 20,
}

export function TemplateSignature(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TEMPLATE_SIGNATURE)} />
}
