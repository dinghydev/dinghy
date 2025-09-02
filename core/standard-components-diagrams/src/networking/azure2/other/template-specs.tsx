import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEMPLATE_SPECS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Template_Specs.svg;strokeColor=none;',
  },
  _original_width: 56.99999999999999,
  _original_height: 68,
}

export function TemplateSpecs(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEMPLATE_SPECS}
      {...props}
      _style={extendStyle(TEMPLATE_SPECS, props)}
    />
  )
}
