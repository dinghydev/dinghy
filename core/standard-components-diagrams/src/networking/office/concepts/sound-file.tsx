import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOUND_FILE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.sound_file;',
  },
  _width: 40,
  _height: 50,
}

export function SoundFile(props: DiagramNodeProps) {
  return (
    <Shape {...SOUND_FILE} {...props} _style={extendStyle(SOUND_FILE, props)} />
  )
}
