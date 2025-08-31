import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROGRESS_TRACKER_4 = {
  _style: {
    entity:
      'shape=ellipse;fillColor=#A5ADBA;strokeColor=none;shadow=0;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 5,
  _height: 30,
}

export function ProgressTracker4(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROGRESS_TRACKER_4}
      {...props}
      _style={extendStyle(PROGRESS_TRACKER_4, props)}
    />
  )
}
