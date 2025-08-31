import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AZURE_DIGITAL_TWINS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Azure_Digital_Twins.svg;strokeColor=none;',
  },
  _width: 45,
  _height: 50,
}

export function AzureDigitalTwins(props: DiagramNodeProps) {
  return (
    <Shape
      {...AZURE_DIGITAL_TWINS}
      {...props}
      _style={extendStyle(AZURE_DIGITAL_TWINS, props)}
    />
  )
}
