import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEMPLATE_SPECS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Template_Specs.svg;strokeColor=none;',
  _width: 56.99999999999999,
  _height: 68,
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
