import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEMPLATE_SIGNATURE = {
  _style: 'shape=partialRectangle;html=1;top=1;align=left;dashed=1;',
  _width: 200,
  _height: 20,
}

export function TemplateSignature(props: DiagramNodeProps) {
  return <Shape {...TEMPLATE_SIGNATURE} {...props} />
}
