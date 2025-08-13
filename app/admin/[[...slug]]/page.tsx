'use client';

import { TinaAdmin } from 'tinacms';
import tinaConfig from '../../../tina/config';

export default function AdminPage() {
    return <TinaAdmin config={tinaConfig} />;
}
