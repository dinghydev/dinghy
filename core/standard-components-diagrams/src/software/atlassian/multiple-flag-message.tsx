import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIPLE_FLAG_MESSAGE = {
  _style: {
    entity:
      ' rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;shadow=1;html=1;arcSize=4;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _original_width: 333,
  _original_height: 150,
}

export function MultipleFlagMessage(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTIPLE_FLAG_MESSAGE}
      {...props}
      _style={extendStyle(MULTIPLE_FLAG_MESSAGE, props)}
    />
  )
}
