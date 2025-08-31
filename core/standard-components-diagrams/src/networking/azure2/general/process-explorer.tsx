import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROCESS_EXPLORER = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/Process_Explorer.svg;strokeColor=none;',
  _width: 70,
  _height: 68,
}

export function ProcessExplorer(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROCESS_EXPLORER}
      {...props}
      _style={extendStyle(PROCESS_EXPLORER, props)}
    />
  )
}
