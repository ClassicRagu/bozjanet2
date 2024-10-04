import { defaultList } from '@/components/relic/weapons/defaultList';
import { atomWithStorage } from 'jotai/utils';

export const weaponState = atomWithStorage<boolean[][]>('weaponState', defaultList)