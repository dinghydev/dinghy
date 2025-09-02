import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEMPLATE_SIGNATURE = {
  _style: {
    entity: 'shape=partialRectangle;html=1;top=1;align=left;dashed=1;',
  },
  _original_width: 200,
  _original_height: 20,
}

export function TemplateSignature(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEMPLATE_SIGNATURE}
      {...props}
      _style={extendStyle(TEMPLATE_SIGNATURE, props)}
    />
  )
}
