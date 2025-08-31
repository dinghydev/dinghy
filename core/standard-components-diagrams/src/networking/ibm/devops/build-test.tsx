import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUILD_TEST = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/devops/build_test.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function BuildTest(props: DiagramNodeProps) {
  return (
    <Shape {...BUILD_TEST} {...props} _style={extendStyle(BUILD_TEST, props)} />
  )
}
