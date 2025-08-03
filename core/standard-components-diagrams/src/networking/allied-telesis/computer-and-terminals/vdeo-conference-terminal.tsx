import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VDEO_CONFERENCE_TERMINAL = {
  _style:
    'image;points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;image=img/lib/allied_telesis/computer_and_terminals/Vdeo_Conference_Terminal.svg;strokeColor=none;',
  _width: 31.8,
  _height: 45,
}

export function VdeoConferenceTerminal(props: DiagramNodeProps) {
  return <Shape {...VDEO_CONFERENCE_TERMINAL} {...props} />
}
