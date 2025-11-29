import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TEMPLATE_SPECS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Template_Specs.svg;strokeColor=none;',
  },
  _original_width: 56.99999999999999,
  _original_height: 68,
}

export function TemplateSpecs(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TEMPLATE_SPECS)} />
}
