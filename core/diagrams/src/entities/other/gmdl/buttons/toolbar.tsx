import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TOOLBAR = {
  _style: {
    entity:
      'shape=rect;fillColor=#ffffff;strokeColor=none;graientColor=none;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 358,
  _height: 64,
}

export function Toolbar(props: DiagramNodeProps) {
  return <Shape {...TOOLBAR} {...props} _style={extendStyle(TOOLBAR, props)} />
}
