import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROGRESS_TRACKER = {
  _style: {
    entity:
      'fillColor=#0065FF;strokeColor=none;shadow=0;rounded=1;arcSize=50;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 470,
  _height: 30,
}

export function ProgressTracker(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROGRESS_TRACKER}
      {...props}
      _style={extendStyle(PROGRESS_TRACKER, props)}
    />
  )
}
